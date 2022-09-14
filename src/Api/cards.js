import axios from "axios";
import React from "react";

export default axios.create({
    baseURL: "https://api.infosit-zadatak.tk/api"
})
