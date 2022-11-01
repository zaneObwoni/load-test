import http from "k6/http";
import { sleep } from "k6";

const temp =
  "https://6359cd9b4f6edc56be1703ac620d37c1b670a22f-preview.gaspedaal.nl";
const temp2 =
  "https://37f62b32866e4fb94313bdf7949df558eb5754e5-preview.gaspedaal.nl";

const BASE_URL = temp;

export let options = {
  ext: {
    loadimpact: {
      projectID: 3607386,
      // Test runs with the same name groups test runs together
      name: "gp",
    },
  },
  stages: [
    { duration: "15s", target: 50 },
    { duration: "30s", target: 50 },
    { duration: "15s", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(95)<1000"],
  },
};

export default function () {
  http.get(BASE_URL);
  sleep(1);
}
