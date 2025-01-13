import { api } from "../api";

export const loginUser = async (loginData) => {
  const response = await fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    body: JSON.stringify({
      email: loginData?.email,
      password: loginData?.password,
    }),
  });
  console.log("LOGIN ACTION", response.json());
};

export const getMovies = async () => {
  try {
    const response = await api.get("v1/movies", {
      cache: "no-store",
    });

    if (response.ok) {
      return response.json();
    } else {
      return { error: true, message: "Something went wrong" };
    }
  } catch (error) {
    if (error) {
      //   //Handling HTTP errors specifically
      //   const status = error?.response?.status; // HTTP error code ( e.g - 404, 500)
      //   const responseBody = await error?.response?.json(); // parse the response body if possible

      //   console.log("HTTP Error:", status, responseBody);
      // } else {
      //   //Handling non-HTTP errors ( e.g. network issues)
      //   console.log("unknown error:", error);
      console.log("API ERROR", error);
    }
    return undefined;
  }
};
