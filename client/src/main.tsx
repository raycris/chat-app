import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import "stream-chat-react/dist/css/index.css";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
