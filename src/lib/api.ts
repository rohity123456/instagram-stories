export async function getUsersStories(): Promise<IResponse<User[]>> {
  return fetch(`${process.env.API_URL}/api/users/stories`)
    .then((res) => res.json())
    .catch((err) => ({
      success: false,
      error: { message: err.message, details: err }
    }));
}

export async function getUsersPosts(): Promise<IResponse<Post[]>> {
  return fetch(`${process.env.API_URL}/api/users/posts`)
    .then((res) => res.json())
    .catch((err) => ({
      success: false,
      error: { message: err.message, details: err }
    }));
}
