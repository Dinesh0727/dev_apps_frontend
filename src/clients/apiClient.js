import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080", // Backend base URL
  withCredentials: true, // Ensure cookies are included
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  function (response) {
    console.log(response);

    return response;
  },
  async function (error) {
    console.log(error);

    const status = error.response.status;
    console.log("Error Dinesh : ", error.response.status);

    if (status === 421) {
      console.log("The JWT token has been expired");
      // Make an api request to api/refresh-token to get a new JWT Token

      try {
        const res = await apiClient.post(
          "http://localhost:8080/api/refresh-token"
        );
        console.log("Response for refresh-token hit in interceptor ", res.data);

        if (res.status === 200) {
          const responseBody = res.data;
          console.log(
            "API Response after hitting http://localhost:8080/api/tokens ",
            responseBody
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
);

export default apiClient;
