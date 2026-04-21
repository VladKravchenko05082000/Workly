import { loadEnvConfig } from "@next/env";
import process from "process";

const projectDir = process.cwd();
loadEnvConfig(projectDir);
