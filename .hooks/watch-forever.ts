while (true) {
  const command = new Deno.Command("deno", {
    args: [
      "run",
      "--check",
      "--watch=src/",
      "--allow-env",
      "--allow-sys",
      "--allow-net",
      "--allow-read",
      "--allow-write",
      "--allow-ffi",
      "--allow-run",
      "src/start.ts",
    ],
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
  });
  const { code } = await command.output();
  console.log(`\nwatcher exited with code ${code}, restarting...\n`);
}
