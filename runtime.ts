import { forApp } from "$live/clients/withManifest.ts";
import type { SiteApp } from "./apps/site.ts";

export const Runtime = forApp<SiteApp>();
