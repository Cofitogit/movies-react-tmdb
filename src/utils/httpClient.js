const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmRiMTE3MDIxMDc2OTZiY2QyYmEwY2YzZGZlYjBkYiIsInN1YiI6IjYzYTNhNmRjMjVhNTM2MDA3ZjNhYjdiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XaiWvlme9gwf0SVnYNLIEk5NODTC_TrnoR3nCzJT7iI",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
