import axios from "axios";

export const githubApi = axios.create({
    baseURL: "https://api.github.com/repos/facebook/react/",
    headers: {
        Authorization: 'Bearer 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'
    },
})