import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Header from "../components/Header";
import SocialMediaLogin from "../components/SocialMediaLogin";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const onIAlreadyHaveClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] hover:[background:linear-gradient(#fff,_#fff),_#87550a]">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection={false}
      />
      <main className="self-stretch flex flex-row items-start justify-center pt-[170.1px] px-5 pb-[170.2px] box-border bg-[url('/public/login-sections@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-7xl text-dark font-archivo mq750:gap-[28px] mq750:pt-[72px] mq750:pb-[72px] mq750:box-border mq1100:pt-[111px] mq1100:pb-[111px] mq1100:box-border">
        <div className="w-[589px] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 bg-white flex flex-col items-start justify-start py-10 px-12 box-border gap-[37.7px] max-w-full mq750:gap-[19px] mq750:py-[26px] mq750:px-6 mq750:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
              <h2 className="m-0 self-stretch relative text-inherit tracking-[0.02em] font-bold font-inherit mq450:text-2xl">
                Create Account
              </h2>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[13.7px] box-border max-w-full">
                <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[26.7px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[15.7px]">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-[51px] font-archivo text-base text-light-text"
                      placeholder="Email address"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconaccount.svg"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.799999999999955px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-[51px] font-archivo text-base text-light-text"
                      placeholder="Password"
                      variant="outlined"
                      type="password"
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconpassword.svg"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.799999999999955px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-[51px] font-archivo text-base text-light-text"
                      placeholder="Confirm password"
                      variant="outlined"
                      type="password"
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src="/iconpassword-1.svg"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.799999999999955px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                  </div>
                  <Button
                    className="w-40 h-[52px] hover:bg-saddlebrown"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      background: "#00c29f",
                      borderRadius: "6px",
                      "&:hover": { background: "#00c29f" },
                      width: 160,
                      height: 52,
                    }}
                  >
                    Sign up
                  </Button>
                </form>
              </div>
              <div className="self-stretch h-[13.7px] flex flex-row items-start justify-start pt-0 px-0 pb-[12.1px] box-border max-w-full">
                <div className="self-stretch flex-1 relative box-border max-w-full border-t-[1.6px] border-solid border-whitesmoke-200" />
              </div>
              <SocialMediaLogin
                orSignUpWith="Or sign up with"
                image="/image1@2x.png"
                image1="/image-15@2x.png"
                image2="/image-21@2x.png"
              />
            </div>
            <div
              className="self-stretch relative text-base tracking-[0.02em] leading-[26px] text-center cursor-pointer"
              onClick={onIAlreadyHaveClick}
            >
              <span>{`I already have an account. `}</span>
              <span className="text-accent">Login</span>
            </div>
          </div>
        </div>
      </main>
      <footer className="self-stretch box-border flex flex-col items-center justify-start py-3 px-20 max-w-full text-left text-sm text-black font-archivo border-t-[1px] border-solid border-light-grey-border mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="w-full flex flex-row items-start justify-center max-w-[1280px] mq1275:max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-[1280px] gap-[20px] mq1275:max-w-full mq750:flex-wrap">
            <div className="relative leading-[17px] font-light">
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className="flex flex-row items-start justify-start gap-[20px] mq450:flex-wrap">
              <div className="relative leading-[17px] font-light inline-block min-w-[85px]">
                Privacy Policy
              </div>
              <div className="relative leading-[17px] font-light inline-block min-w-[120px]">{`Terms & Conditions`}</div>
              <div className="relative leading-[17px] font-light inline-block min-w-[67px]">
                Contact us
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPage;
