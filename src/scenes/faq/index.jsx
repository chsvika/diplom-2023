import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Вопрос-ответ" subtitle="Ответы на популярные вопросы" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Как зайти в другой аккаунт?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Для того, чтобы переключить аккаунт на вашем ПК, необходимо обратиться к администратору сервиса. Самостоятельно этого сделать не получится.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Как добавить нового пациента?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            В левой части сервиса имеется специальный раздел, при нажатии на который вы сможете внести необходимые данные.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Можно ли посмотреть график работы моих коллег?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Да, такая возможность находится в разделе "Сотрудники" в левой части сервиса.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Как сменить тему приложения на более светлую?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Сервис содержит в себе две темы: светлую и темную. Для того, чтобы изменить тему, необходимо нажать на иконку полумесяца в верхней правой части сервиса.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Как я могу выписать пациента в сервисе?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Для того, чтобы выписать пациента, необходимы перейти в раздел "Пациенты", который находится в левой части экрана и найти нужного пациента, а затем справа нажать кнопку "Выписать".
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
