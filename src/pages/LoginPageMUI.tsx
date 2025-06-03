
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Container,
  Paper,
  Alert
} from "@mui/material";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const LoginPageMUI = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: "Welcome back to ServicePro!",
      });
      setIsSubmitting(false);
      // Normally would redirect to dashboard or handle successful login
    }, 1500);
  };

  return (
    <Layout>
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
            Welcome Back
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Log in to your ServicePro account to access your dashboard.
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ p: 4, border: 1, borderColor: "divider" }}>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              margin="normal"
              variant="outlined"
            />

            <Box sx={{ mt: 3, mb: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                <Typography component="label" htmlFor="password" variant="body2" fontWeight="medium">
                  Password
                </Typography>
                <Typography
                  component={Link}
                  to="/forgot-password"
                  variant="body2"
                  sx={{ 
                    color: "#0A2342", 
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" }
                  }}
                >
                  Forgot password?
                </Typography>
              </Box>
              <TextField
                fullWidth
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Box>

            <FormControlLabel
              control={
                <Checkbox
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  sx={{ color: "#0A2342", "&.Mui-checked": { color: "#0A2342" } }}
                />
              }
              label="Remember me"
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isSubmitting}
              sx={{
                bgcolor: "#0A2342",
                "&:hover": { bgcolor: "rgba(10, 35, 66, 0.9)" },
                py: 1.5,
                textTransform: "none",
                fontSize: "1rem"
              }}
            >
              {isSubmitting ? "Logging in..." : "Log in"}
            </Button>
          </Box>

          <Box sx={{ mt: 3, pt: 2, borderTop: 1, borderColor: "divider", textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              Don't have an account yet?{" "}
              <Typography
                component={Link}
                to="/signup"
                variant="body2"
                sx={{
                  color: "#0A2342",
                  fontWeight: "medium",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" }
                }}
              >
                Start your free trial
              </Typography>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Layout>
  );
};

export default LoginPageMUI;
