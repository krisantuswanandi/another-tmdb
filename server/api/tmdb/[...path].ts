export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  try {
    return await $fetch(event.context.params!.path, {
      baseURL: "https://api.themoviedb.org/3",
      params: {
        api_key: process.env.TMDB_API_KEY,
        ...query,
      }
    })
  } catch {
    setResponseStatus(event, 500)
    return {
      error: "Connection Error!"
    }
  }
})
