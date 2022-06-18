import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Initial } from "./pages/Initial";
import { Profile } from "./pages/Profile";
import { Explorer } from "./pages/Explorer";

import { Container } from "./routesStyle";

import { Navbar } from "./components/Navbar/Navbar";
import { Notifications } from "./pages/Notifications";

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Container>
				<Navbar />
				<Routes>
					<Route path="/" element={<Initial />} />
					<Route path="profile" element={<Profile />} />
					<Route path="explorer" element={<Explorer />} />
					<Route path="notifications" element={<Notifications />} />
				</Routes>
			</Container>
		</BrowserRouter>
	);
}
