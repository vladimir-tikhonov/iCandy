// @flow

import urlJoin from "url-join";
import axios from "axios";

const BACKEND_HOST = "http://localhost:4000";
const API_PREFIX = "/api/v1/";

const buildUrl = (path) => urlJoin(BACKEND_HOST, API_PREFIX, path);

export const post = (path: string, params: Object) => axios.post(buildUrl(path), params);
