import { createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = "http://localhost:7777/"

export const getPizzas = createAsyncThunk(
    'pizzas/getPizzas',

    async () => {
        const res = await fetch(baseUrl + 'pizzas')
        const data = res.json()

        return data
    }
)
export const removePizza = createAsyncThunk(
    'pizzas/removePizza',

    async (id) => {
        const res = await fetch(baseUrl + 'pizzas/' + id, {
            method: "DELETE"
        })
        const data = res.json()

        return data
    }
)