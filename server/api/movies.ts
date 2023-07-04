export default defineEventHandler(async (event) => {
  try {
    return await $fetch("https://api.themoviedb.org/3/movie/popular", {
      params: {
        api_key: process.env.TMDB_API_KEY
      }
    })
  } catch {
    setResponseStatus(event, 500)
    return {
      error: "Connection Error!"
    }
  }
})
