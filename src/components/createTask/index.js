import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Grid, Box, Container } from "@mui/material";
import FormInputText from "../common/hookForm/textInput";
import SingleCustomSelect from "../common/hookForm/singleSelect";
import Loader from "../common/loader";
import { TASK_STATUS, VALIDATION_REGEX } from "../../../src/config";
import CustomButton from "../common/button";

const AddTask = ({
  addInventory,
  isAddInventoryLoading,
  addInventoryError,
  fetchProductSubCat,
  productSubCats,
  isProductSubCatLoading,
  isAddProductLoading,
  addProduct,
}) => {
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/tasks");
  };
  const handleAddTask = (task) => {
    console.log(task);
  };
  return (
    <>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12}>
            <Box sx={{ width: "100%" }}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={6}>
                  <FormInputText
                    name={`title`}
                    control={control}
                    label={"Title*"}
                    rules={{
                      required: "Please provide valid title",
                      pattern: {
                        value: VALIDATION_REGEX.resourceName,
                        message: "Please provide valid title",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormInputText
                    name={`description`}
                    control={control}
                    label={"Description*"}
                    rules={{
                      required: "Please provide valid description",
                      pattern: {
                        value: VALIDATION_REGEX.resourceName,
                        message: "Please provide valid description",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <SingleCustomSelect
                    name={`status`}
                    control={control}
                    label={"Status*"}
                    rules={{
                      required: "Please provide valid status",
                    }}
                    options={TASK_STATUS}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          marginY={3}
        >
          <Grid item sx={{ width: "auto" }}>
            <CustomButton
              isLight
              handleButtonClick={handleClose}
              title="Cancel"
            />
          </Grid>
          <Grid item sx={{ width: "auto" }}>
            <CustomButton
              disabled={!isValid}
              handleButtonClick={handleSubmit(handleAddTask)}
              title="Save"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AddTask;
