import { Box, Typography, Button, Paper, Divider } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import loginmage from "../../assets/images/bgLogin.png"
const LoginFormTailwind = () => {
  const defaultValues = {
    email: "",
    password: "",
  };
  const [isLoading, setIsLoding] = useState(false);
  const [formFields, setFormFields] = useState(defaultValues);
  const [user, setUser] = useState([]);
  const { email, password } = defaultValues;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  function handleSubmit(e) {
    // e.preveDefault()
    setIsLoding(true);
    setTimeout(() => {
      setUser([...user, formFields]);
      setIsLoding(false);
    }, 1000);
  }
  const handleKey = (e) => {
    const value = e.key;
    if (value === "Enter") {
      handleSubmit();
    }
  };
  console.log(user);
  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100%" }}>
      <Box
        className="form-container"
        sx={{
          width: { xs: "100%", sm: "100%", nd: "100%", lg: "50%", xl: "50%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          border={0}
          p={3}
          sx={{
            width: { lg: "400px", md: "400px", sm: "400px", xs: "300px" },
            // height: "500px",
            display: "flex",
            alignItems: "center",
            borderRadius: "15px",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box>
              <Box mb={3} className="logo" sx={{ width: "47px" }}>
                <img src="src\assets\mark.svg" alt="logo" />
              </Box>
              <Box className="heading">
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "30px",
                    color: "#282828",
                  }}
                >
                  Sign in to your account
                </Typography>
              </Box>
              <Box className="paraga" mt={1}>
                <Typography
                  sx={{ color: "#94a3b8", fontWeight: 400 }}
                  component="p"
                >
                  Not a memeber ?{" "}
                  <span>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "#6366f1",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      {" "}
                      Start a14 day free trial
                    </a>
                  </span>
                </Typography>
              </Box>
            </Box>
            <Box>
              <form action="" onKeyDown={handleKey}>
                <Typography mt={4} sx={{ fontWeight: "bold", opacity: 0.8 }}>
                  Email address
                </Typography>
                <Box>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      outlineColor: "#6366f1",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "5px",
                      border: "1px solid",
                      borderColor: "#d1d5db",
                    }}
                    name="email"
                    onChange={handleChange}
                    // value={email}
                  />
                </Box>
                <Typography mt={1} sx={{ fontWeight: "bold", opacity: 0.8 }}>
                  Password
                </Typography>
                <Box>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      height: "36px",
                      outlineColor: "#6366f1",
                      padding: "0px",
                      margin: "0px",
                      borderRadius: "5px",
                      border: "1px solid #d1d5db",
                    }}
                    name="password"
                    onChange={handleChange}
                    // value={password}
                  />
                </Box>
                <Box
                  mt={2}
                  mb={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <input
                      style={{ height: "40px", width: "20px" }}
                      type="checkbox"
                    />
                    <Typography ml={1}>Remember me</Typography>
                  </Box>
                  <a
                    href=""
                    style={{
                      textDecoration: "none",
                      color: "#6366f1",
                      fontFamily: "inherit",
                    }}
                  >
                    Forget password
                  </a>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Button
                    disableRipple={true}
                    variant="contained"
                    disableElevation={true}
                    onClick={handleSubmit}
                    sx={{
                      width: "100%",
                      textTransform: "none",
                      height: { xs: "37px", sm: "40px" },
                      borderRadius: "6px",
                      backgroundColor: "#4f46e5",
                      fontSize: "16px",
                      fontWeight: "400",
                      "&:hover": { backgroundColor: "#6366f1" },
                    }}
                    disabled={isLoading ? true : false}
                  >
                    Sign in
                  </Button>
                </Box>
              </form>
              <Box sx={{ height: "70px" }}>
                <Box
                  m={1}
                  sx={{ height: "50px", padding: "5px", lineHeight: "50px" }}
                >
                  <Divider sx={{ fontSize: "16px", color: "gray" }}>
                    Or continue with
                  </Divider>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box
                    border={1}
                    sx={{
                      width: { xs: "120px", sm: "184px" },
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: { xs: "2px" },
                      borderRadius: "5px",
                      borderColor: "#d1d5db",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        display: "flex",
                        textDecoration: "none",
                        color: "#111827",
                      }}
                    >
                      <Box sx={{ width: "20px" }}>
                        <img
                          src="src\assets\google-icon-logo-svgrepo-com.svg"
                          alt=""
                          style={{ width: "100%", backgroundSize: "cover" }}
                        />
                      </Box>
                      <Typography ml={1} sx={{ fontWeight: "700" }}>
                        Google
                      </Typography>
                    </a>
                  </Box>
                  <Box
                    border={1}
                    sx={{
                      width: { xs: "120px", sm: "184px" },
                      height: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "5px",
                      padding: "0px",
                      margin: "0px",
                      borderColor: "#d1d5db",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        display: "flex",
                        textDecoration: "none",
                        color: "#111827",
                      }}
                    >
                      <Box sx={{ width: "20px" }}>
                        <img
                          src="src\assets\github-142-svgrepo-com.svg"
                          alt=""
                          style={{ width: "100%", backgroundSize: "cover" }}
                        />
                      </Box>
                      <Typography ml={1} sx={{ fontWeight: "700" }}>
                        Github
                      </Typography>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="form-image "
        sx={{
          width: "50%",
          display:"flex",
          flexDirection:"column",
          bgcolor:"red",
          justifyItems:"center",
          alignItems:"center",
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <img src={loginmage} className="" alt="" />
      </Box>
    </Box>
  );
};
export default LoginFormTailwind;