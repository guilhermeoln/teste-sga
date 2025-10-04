"use client";

const keyPrefix = "@sga/";

export const setCache = (key: string, value: string) => {
  return localStorage.setItem(`${keyPrefix}${key}`, value);
};

export const getCache = (key: string) => {
  return localStorage.getItem(`${keyPrefix}${key}`);
};
