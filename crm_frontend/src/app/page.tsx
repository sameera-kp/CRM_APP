"use client";

import { Box, Button, Typography, Grid, Card, CardContent } from "@mui/material";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f7fb", display: "flex", flexDirection: "column" }}>

      {/* ── Navbar (Original - No Changes) ── */}
      <Box sx={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        px: { xs: 3, md: 6 }, py: 2, bgcolor: "white",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)"
      }}>
        {/* Logo */}
        <Typography sx={{ fontWeight: 800, fontSize: 22, color: "#6c63ff" }}>
          CRM
        </Typography>

        {/* Right Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            onClick={() => router.push("/login")}
            sx={{
              textTransform: "none", borderRadius: 2,
              borderColor: "#6c63ff", color: "#6c63ff",
              fontWeight: 600,
              "&:hover": { bgcolor: "#f3f0ff" }
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            onClick={() => router.push("/register")}
            sx={{
              textTransform: "none", borderRadius: 2,
              bgcolor: "#6c63ff", fontWeight: 600,
              "&:hover": { bgcolor: "#5a52d5" }
            }}
          >
            Register
          </Button>
        </Box>
      </Box>

      {/* ── Hero Section (Split Layout with Image) ── */}
      <Box sx={{
        px: { xs: 3, md: 6 }, py: { xs: 6, md: 10 },
        display: "flex", alignItems: "center", justifyContent: "center",
        minHeight: "80vh"
      }}>
        <Grid container spacing={6} alignItems="center">
          
          {/* Left Side: Your Original Text Content */}
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography sx={{
              fontSize: { xs: 32, md: 52 },
              fontWeight: 800, color: "#1a1a2e", lineHeight: 1.2, mb: 2
            }}>
              Manage Your Customers
              <br />
              <span style={{ color: "#6c63ff" }}>Smarter & Faster</span>
            </Typography>

            <Typography sx={{
              fontSize: { xs: 15, md: 18 }, color: "#666",
              maxWidth: 520, mb: 4, lineHeight: 1.8,
              mx: { xs: "auto", md: 0 }
            }}>
              A powerful CRM platform to track leads, manage deals,
              and grow your business — all in one place.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" } }}>
              <Button
                variant="contained"
                onClick={() => router.push("/register")}
                sx={{
                  textTransform: "none", borderRadius: 2,
                  bgcolor: "#6c63ff", fontWeight: 600,
                  px: 4, py: 1.5, fontSize: 16,
                  "&:hover": { bgcolor: "#5a52d5" }
                }}
              >
                Get Started Free
              </Button>
              <Button
                variant="outlined"
                onClick={() => router.push("/login")}
                sx={{
                  textTransform: "none", borderRadius: 2,
                  borderColor: "#6c63ff", color: "#6c63ff",
                  fontWeight: 600, px: 4, py: 1.5, fontSize: 16,
                  "&:hover": { bgcolor: "#f3f0ff" }
                }}
              >
                Login
              </Button>
            </Box>
          </Grid>

          {/* Right Side: Purple Theme Vector Illustration */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{
              width: "100%", maxWidth: 480, display: "flex", justifyContent: "center",
              filter: "drop-shadow(0px 15px 30px rgba(108, 99, 255, 0.15))" // Soft purple shadow
            }}>
              <Box 
                component="img"
                src="https://storyset.com/about/purple" // fallback standard purple illustration base style, alternatively use below unsplash link
                srcSet="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
                alt="CRM Purple Analysis Mockup"
                sx={{
                  width: "100%", height: "auto", display: "block",
                  borderRadius: 4, border: "2px solid rgba(108, 99, 255, 0.1)"
                }}
              />
            </Box>
          </Grid>

        </Grid>
      </Box>

      {/* ── EXTRA SECTION 1: Stats with Purple Accents ── */}
      <Box sx={{ px: { xs: 3, md: 6 }, pb: 8 }}>
        <Grid container spacing={3} justifyContent="center">
          {[
            { value: "99.9%", label: "Uptime SLA" },
            { value: "10k+", label: "Active Users" },
            { value: "4.8/5", label: "User Rating" }
          ].map((stat, idx) => (
            <Grid item xs={6} sm={3} key={idx}>
              <Box sx={{ 
                bgcolor: "white", p: 3, borderRadius: 3, textAlign: "center", 
                boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                borderTop: "3px solid #6c63ff" // Added top purple line
              }}>
                <Typography sx={{ fontSize: 28, fontWeight: 800, color: "#6c63ff" }}>{stat.value}</Typography>
                <Typography sx={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>{stat.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ── EXTRA SECTION 2: Features Cards Grid with Purple Highlight ── */}
      <Box sx={{ bgcolor: "white", py: 10, px: { xs: 3, md: 6 }, borderTop: "1px solid #eef2f6" }}>
        <Typography sx={{ textTransform: "uppercase", fontSize: 13, fontWeight: 700, color: "#6c63ff", textAlign: "center", mb: 1, letterSpacing: 1 }}>
          Platform Features
        </Typography>
        <Typography sx={{ fontSize: { xs: 24, md: 34 }, fontWeight: 800, color: "#1a1a2e", textAlign: "center", mb: 6 }}>
          Everything you need to close deals
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card variant="outlined" sx={{ borderRadius: 3, height: "100%", transition: "0.3s", "&:hover": { borderColor: "#6c63ff", transform: "translateY(-4px)", boxShadow: "0 10px 20px rgba(108, 99, 255, 0.05)" } }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: "#6c63ff" }}>Lead Tracking</Typography>
                <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.6 }}>Never lose a prospect. Organize, rank, and track your leads smoothly throughout the sales pipeline.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card variant="outlined" sx={{ borderRadius: 3, height: "100%", transition: "0.3s", "&:hover": { borderColor: "#6c63ff", transform: "translateY(-4px)", boxShadow: "0 10px 20px rgba(108, 99, 255, 0.05)" } }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: "#6c63ff" }}>Deal Management</Typography>
                <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.6 }}>Monitor performance, forecast sales analytics, and manage multi-stage contracts effortlessly.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card variant="outlined" sx={{ borderRadius: 3, height: "100%", transition: "0.3s", "&:hover": { borderColor: "#6c63ff", transform: "translateY(-4px)", boxShadow: "0 10px 20px rgba(108, 99, 255, 0.05)" } }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: "#6c63ff" }}>Task Reminders</Typography>
                <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.6 }}>Schedule meetings, structure notes, and trigger automated alerts to keep your team aligned.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* ── EXTRA SECTION 3: Deep Dark Purple Footer ── */}
      <Box sx={{ bgcolor: "#121224", color: "#94a3b8", py: 4, px: 3, textAlign: "center", mt: "auto" }}>
        <Typography sx={{ fontSize: 13 }}>
          © {new Date().getFullYear()} CRM Platform. All rights reserved. Built with Material UI.
        </Typography>
      </Box>

    </Box>
  );
}