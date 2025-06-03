
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Grid
} from "@mui/material";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const SignupPageMUI = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation checks
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Your account has been created. Check your email to get started.",
      });
      setIsSubmitting(false);
      // Normally would redirect or handle successful signup
    }, 1500);
  };

  return (
    <Layout>
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
            Start Your Free Trial
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Get access to all features for 5 days. No credit card required.
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ p: 4, border: 1, borderColor: "divider" }}>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              id="companyName"
              name="companyName"
              label="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              required
              margin="normal"
              variant="outlined"
            />

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

            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              margin="normal"
              variant="outlined"
              inputProps={{ minLength: 8 }}
            />

            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              margin="normal"
              variant="outlined"
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isSubmitting}
              sx={{
                bgcolor: "#F97316",
                "&:hover": { bgcolor: "rgba(249, 115, 22, 0.9)" },
                py: 1.5,
                textTransform: "none",
                fontSize: "1rem",
                mb: 2
              }}
            >
              {isSubmitting ? "Creating your account..." : "Create Account"}
            </Button>

            <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 3 }}>
              By signing up, you agree to our{" "}
              <Typography
                component={Link}
                to="/terms"
                variant="body2"
                sx={{
                  color: "#0A2342",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" }
                }}
              >
                Terms of Service
              </Typography>{" "}
              and{" "}
              <Typography
                component={Link}
                to="/privacy"
                variant="body2"
                sx={{
                  color: "#0A2342",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" }
                }}
              >
                Privacy Policy
              </Typography>
              .
            </Typography>
          </Box>

          <Box sx={{ pt: 3, borderTop: 1, borderColor: "divider", textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              Already have an account?{" "}
              <Typography
                component={Link}
                to="/login"
                variant="body2"
                sx={{
                  color: "#0A2342",
                  fontWeight: "medium",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" }
                }}
              >
                Log in
              </Typography>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Layout>
  );
};

export default SignupPageMUI;
