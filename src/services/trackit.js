import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function register(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
  return promise;
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/auth/login`, body);
  return promise;
}

function getConfig() {
  const TOKEN = JSON.parse(localStorage.getItem("trackit")).token;
  const config = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  return config;
}

function getHabits() {
  const promisse = axios.get(`${BASE_URL}/habits`, getConfig());
  return promisse;
}

function createHabit(body) {
  const promisse = axios.post(`${BASE_URL}/habits`, body, getConfig());
  return promisse;
}

function deleteHabit(HABIT_ID) {
  const promisse = axios.delete(`${BASE_URL}/habits/${HABIT_ID}`, getConfig());
  return promisse;
}

function getTodayHabits() {
  const promisse = axios.get(`${BASE_URL}/habits/today`, getConfig());
  return promisse;
}

function checkHabit(HABIT_ID) {
  const promisse = axios.post(
    `${BASE_URL}/habits/${HABIT_ID}/check`,
    {},
    getConfig()
  );
  return promisse;
}

function uncheckHabit(HABIT_ID) {
  const promisse = axios.post(
    `${BASE_URL}/habits/${HABIT_ID}/uncheck`,
    {},
    getConfig()
  );
  return promisse;
}

export {
  register,
  login,
  getHabits,
  createHabit,
  deleteHabit,
  getTodayHabits,
  checkHabit,
  uncheckHabit,
};
