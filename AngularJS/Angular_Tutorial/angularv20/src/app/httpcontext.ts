import { HttpContextToken } from "@angular/common/http";

// define the context token
export const CACHING_CONTEXT = new HttpContextToken(() => true)