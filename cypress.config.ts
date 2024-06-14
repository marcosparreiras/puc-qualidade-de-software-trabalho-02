import { defineConfig } from "cypress";
import axios from "axios";

const baseUrlBackEndUrl = "http://localhost:3333";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, _config) {
      on("task", {
        async "db:create"(user: {
          name: string;
          email: string;
          password: string;
        }) {
          const { data } = await axios.post(`${baseUrlBackEndUrl}/users`, user);
          return data;
        },

        async "db:clear"() {
          const { data } = await axios.delete(`${baseUrlBackEndUrl}/users`);
          return data;
        },
      });
    },
  },
});
