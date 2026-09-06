import { Attributes, SpanStatusCode } from "@opentelemetry/api";
import { BasicTracerProvider, BatchSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { MeterProvider, PeriodicExportingMetricReader } from "@opentelemetry/sdk-metrics";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-http";
import { resourceFromAttributes } from "@opentelemetry/resources";

// Deliberately not using Deno's built in OTel (OTEL_DENO), it auto traces every HTTP
// request with no way to turn that off. Exporting our own spans keeps the dataset to just
// the socket and game activity worth looking at. The exporters read the endpoint and the
// Honeycomb key from the OTEL_EXPORTER_OTLP_* vars in .env.
const resource = resourceFromAttributes({
  "service.name": Deno.env.get("OTEL_SERVICE_NAME") ?? "micromania-server",
});

const tracer = new BasicTracerProvider({
  resource,
  spanProcessors: [new BatchSpanProcessor(new OTLPTraceExporter())],
}).getTracer("micromania-server");

export const meter = new MeterProvider({
  resource,
  readers: [new PeriodicExportingMetricReader({ exporter: new OTLPMetricExporter() })],
}).getMeter("micromania-server");

export function traced<T>(name: string, attributes: Attributes, fn: () => T | Promise<T>): Promise<T> {
  return tracer.startActiveSpan(name, { attributes }, async (span) => {
    try {
      return await fn();
    } catch (error) {
      span.setStatus({ code: SpanStatusCode.ERROR, message: String(error) });
      span.setAttribute("error", true);
      throw error;
    } finally {
      span.end();
    }
  });
}
