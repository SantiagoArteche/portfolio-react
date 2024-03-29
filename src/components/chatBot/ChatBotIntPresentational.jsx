export const ChatBotIntPresentational = ({
  Box,
  chatOn,
  changeChatState,
  Input,
  handleSubmit,
  HighlightOffIcon,
  handleChange,
  messageSend,
  message,
  thinking,
  Button,
  SendIcon,
  language,
  values,
}) => {
  const windowWidth = window.innerWidth;
  return (
    <Box
      sx={{
        top: "8%",
        left: { xs: "19%", sm: "25%", lg: "33%" },
        position: "fixed",
        display: chatOn,
        backgroundColor: "black",

        width: { xs: "70%", sm: "55%", lg: "48%", xl: "39%" },
        borderRadius: 3,
      }}
      component={"form"}
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginX: 2,
          borderBottom: "5px solid white",
          padding: 3,
        }}
      >
        <Box
          sx={{
            color: "white",
            fontSize:
              windowWidth > 360
                ? { xs: "1.6rem", sm: "2.4rem", md: "2.7rem", lg: "3rem" }
                : { xs: "1.3rem", sm: "2.4rem", md: "2.7rem", lg: "3rem" },
          }}
        >
          Santiago Bot
        </Box>
        <Box
          sx={{
            color: "black",
            backgroundColor: "#5f54c78a",
            width: { xs: "1.6rem", sm: "2.4rem", md: "2.4rem", lg: "2.5rem" },
            borderRadius: 40,
            height: { xs: "1.6rem", sm: "2.4rem", md: "2.4rem", lg: "2.5rem" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HighlightOffIcon
            sx={{
              width: { xs: "2.3rem", sm: "2.9rem", md: "3rem", lg: "3.5rem" },
              height: { xs: "2.3rem", sm: "2.9rem", md: "3rem", lg: "3.5rem" },
              cursor: "pointer",
            }}
            onClick={changeChatState}
          />
        </Box>
      </Box>
      <Box
        sx={{
          overflowY: "auto",
          overflowX: "hidden",
          height: "65vh",
        }}
      >
        <Box
          sx={{
            color: "white",
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem", lg: "1.2rem" },
            display: "flex",
            justifyContent: "start",
            backgroundColor: "black",
          }}
        >
          <Box
            sx={{
              backgroundColor: "violet",
              width: "max-content",
              maxWidth: { xs: "250px", md: "430px" },
              margin: 3,
              padding: 3,
              borderRadius: 2,
            }}
          >
            {language === "ES"
              ? "Hola, soy el bot de Santiago, que te gustaria saber ?"
              : "Hello, I'm Santiago bot, what do you want to know ?"}
          </Box>
        </Box>
        <Box
          sx={{
            color: "white",
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem", lg: "1.2rem" },
            display: "flex",
            justifyContent: "end",
          }}
        >
          {messageSend ? (
            <Box
              sx={{
                backgroundColor: "#161c908a",
                width: "max-content",
                maxWidth: "430px",
                margin: 3,
                padding: 3,
                borderRadius: 2,
              }}
            >
              {messageSend}
            </Box>
          ) : null}
        </Box>
        <Box
          sx={{
            color: "white",
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem", lg: "1.2rem" },
            display: "flex",
            justifyContent: "start",
          }}
        >
          {message.length > 0 ? (
            <Box
              sx={{
                backgroundColor: "violet",
                width: "max-content",
                maxWidth: { xs: "250px", md: "430px" },
                margin: 3,
                padding: 3,
                borderRadius: 2,
              }}
            >
              {message}
            </Box>
          ) : (
            messageSend != null &&
            thinking && (
              <Box
                sx={{
                  backgroundColor: "violet",
                  width: "max-content",
                  maxWidth: "430px",
                  margin: 3,
                  padding: 3,
                  borderRadius: 2,
                }}
              >
                {language === "ES" ? "Pensando..." : "Thinking..."}
              </Box>
            )
          )}
        </Box>
      </Box>
      <Box
        sx={{
          marginX: 2,
          backgroundColor: "#5f54c78a",
          borderTop: "4px solid rgb(13,110,253)",
          borderEndStartRadius: 20,
          borderEndEndRadius: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 65,
          marginBottom: 3,
        }}
      >
        <Input
          name="prompt"
          onChange={handleChange}
          value={values.prompt}
          placeholder={
            language === "ES"
              ? "Inserte su pregunta..."
              : "Insert your question..."
          }
          sx={{
            color: "white",
            margin: 2,

            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem", lg: "1.2rem" },
            width: "100%",
            ":before": { border: 0 },
            "::before": { border: 0, content: "none" },
            "::after": { border: 0 },
            "input:-internal-autofill-selected": {
              background: "none !important",
            },
            content: "none",
          }}
        />

        <Button
          sx={{
            paddingX: 4,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            borderEndEndRadius: 20,
            ":hover": {
              backgroundColor: "#6f42c1",
            },
          }}
          type="submit"
        >
          <Box sx={{ width: { xs: 20, md: 30 } }}>
            <SendIcon />
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
