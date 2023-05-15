import {Box, Button, TextField} from "@mui/material";
import {Formik} from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";

const Person = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [editMode, setEditMode] = useState(false)

  const fetchData = () => {
    //initialValues = ...
  }

  const handleFormSubmit = (values) => {
    console.log(values)
  };

  const out = () => {
    if (window.confirm("Вы действительно хотите выписать пациента?") === true) {
      //todo: выписать пациента
      alert('ok')
    }
  }

  useEffect(() => {
    const el = document.querySelector('input[type=file]')
    el.setAttribute('multiple', true)
    fetchData()
  }, [])

  return (
    <Box m="20px">
      <Header title="Пациент" subtitle="Актуальная информация о пациенте"/>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue
          }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(6, minmax(0, 1fr))"
              sx={{
                "& > div": {gridColumn: isNonMobile ? undefined : "span 4"},
              }}
            >
              <TextField
                disabled={!editMode}
                fullWidth
                variant="filled"
                type="text"
                label="Фамилия"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{gridColumn: "span 2"}}
              />
              <TextField
                disabled={!editMode}
                fullWidth
                variant="filled"
                type="text"
                label="Имя"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{gridColumn: "span 2"}}
              />
              <TextField
                disabled={!editMode}
                fullWidth
                variant="filled"
                type="text"
                label="Отчество"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fatherName}
                name="fatherName"
                error={!!touched.fatherName && !!errors.fatherName}
                helperText={touched.fatherName && errors.fatherName}
                sx={{gridColumn: "span 2"}}
              />
              <TextField
                disabled={!editMode}
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{gridColumn: "span 6"}}
              />
              <TextField
                disabled={!editMode}
                fullWidth
                variant="filled"
                type="text"
                label="Номер телефона"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{gridColumn: "span 6"}}
              />
              <TextField
                disabled={!editMode}
                fullWidth
                variant="filled"
                type="text"
                label="Адрес в формате: город,улица,дом"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{gridColumn: "span 6"}}
              />
              <TextField
                disabled={!editMode}
                fullWidth
                variant="filled"
                type="text"
                label="Состояние"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.condition}
                name="condition"
                error={!!touched.condition && !!errors.condition}
                helperText={touched.condition && errors.condition}
                sx={{gridColumn: "span 3"}}
              />
              <TextField
                disabled={!editMode}
                fullWidth
                variant="filled"
                type="date"
                label="Дата рождения"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date}
                name="date"
                sx={{gridColumn: "span 3"}}
              />
              <Box
                sx={{gridColumn: "span 6"}}
                position={'relative'}
              >
                <TextField
                  disabled={!editMode}
                  type='file'
                  variant="filled"
                  position={'relative'}
                  fullWidth
                  onBlur={handleBlur}
                  onChange={(event) => {
                    const files = event.currentTarget.files
                    const newFiles = [...values.docs, ...files]
                    setFieldValue('docs', newFiles)
                  }}
                  name="docs"
                  sx={{
                    "input": {
                      opacity: '0 !important',
                      height: '100px'
                    },
                    "&::after": {
                      display: values.docs.length === 0 ? 'block' : 'none',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      content: '"Прикрепить документы пациента"',
                      height: '50px',
                      width: '250px',
                      background: 'url("./assets/docs.svg") no-repeat',
                      backgroundSize: '30px',
                      paddingTop: '35px',
                      backgroundPosition: 'center 0',
                      pointerEvents: 'none',
                      cursor: 'pointer'
                    }
                  }}
                />

                <Box
                  position='absolute'
                  display='flex'
                  sx={{
                    top: '50%',
                    left: '0',
                    transform: 'translateY(-50%)',
                    textAlign: 'center',
                    height: '100px',
                    gap: '10px',
                    pointerEvents: 'none',
                  }}
                >
                  {Object.values(values.docs).map((file, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '10px',
                        transition: 'all 0.3s ease',
                        "&:hover": editMode ? {
                          background: 'rgba(0, 0, 0, 0.1)',
                          cursor: 'pointer'
                        } : {},
                        pointerEvents: 'all',
                        position: 'relative'
                      }}
                      onClick={() => {
                        if(!editMode) return

                        const newDocs = [...values.docs]
                        newDocs.splice(index, 1)
                        setFieldValue('docs', newDocs)
                      }}
                    >
                      <img src="./assets/doc.svg" alt="file"/>
                      {editMode ? <img src="./assets/cross.svg" alt="file" style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        height: '25px',
                        width: '25px'
                      }}/> : <></>}
                      <Typography
                        sx={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          color: '#BFBCC2',
                        }}
                      >
                        {file.name.length > 10 ? '...' : ''}{file.name.slice(-10)}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
            {!editMode ?
              <Box display="flex" justifyContent="end" mt="20px" gap={'10px'}>
                <Button color="secondary" variant="contained" onClick={() => setEditMode(true)}>
                  Редактировать
                </Button>
                <Button color="secondary" variant="outlined" onClick={out}>
                  Выписать
                </Button>
              </Box>
              :
              <Box display="flex" justifyContent="end" mt="20px" gap={'10px'}>
                <Button color="secondary" variant="contained" type={'submit'}>
                  Сохранить
                </Button>
                <Button color="secondary" variant="outlined" onClick={() => setEditMode(false)}>
                  Отмена
                </Button>
              </Box>
            }
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  fatherName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  condition: yup.string().required("required"),
  date: yup.string().required("required"),
  docs: yup.array().required("required"),
});
let initialValues = {
  firstName: "",
  lastName: "",
  fatherName: "",
  email: "",
  contact: "",
  address1: "",
  condition: "",
  date: "",
  docs: [],
};

export default Person;
