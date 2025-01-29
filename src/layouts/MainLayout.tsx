import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import FloatingButtons from "../components/floating-buttons/FloatingButtons";

import 'react-toastify/dist/ReactToastify.css';

export default function MainLayout() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{ background: "linear-gradient(180deg, #ee8328 0%, #e14318 100%)" }}>
                <Navbar />
            </AppBar>
            <Outlet />
            <ToastContainer />
            <Footer />
            <FloatingButtons />
        </Box>
    );
}