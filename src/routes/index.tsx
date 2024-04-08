// import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index";
import Login from "../pages/Login/index";
import Settings from "../pages/Settings/index";
import Users from "../pages/Users/index";

let userAuth = false;

export default function RoutesGym() {
	return (
		<BrowserRouter>
			<Routes>
				{userAuth ? (
					<>
						<Route path="/home" element={<Home />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/users" element={<Users />} />
						<Route path="*" element={<Home />} />
					</>
				) : (
					<>
						<Route path="/" element={<Login />} />
						<Route path="*" element={<Login />} />
					</>
				)}
			</Routes>
		</BrowserRouter>
	);
}
