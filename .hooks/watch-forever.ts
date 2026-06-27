while (true) {
  const command = new Deno.Command("deno", {
    args: [
      "run",
      "--check",
      "--watch=src/",
      "-A",
      "src/start.ts",
    ],
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
  });
  const { code } = await command.output();
  console.log(`\nwatcher exited with code ${code}, restarting...\n`);
}
