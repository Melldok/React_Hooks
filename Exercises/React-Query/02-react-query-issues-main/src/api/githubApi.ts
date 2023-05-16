import axios from "axios";

export const githubApi = axios.create({
    baseURL: "https://api.github.com/repos/facebook/react/",
    headers: {
        Authorization: 'Bearer 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'
    },
})