import React from "react";
import { Button1 } from "../../global-styles";
import {
  UpdateContainer,
  Update_1,
  Update_h3,
  Form,
  FormInput,
  Button_1,
} from "./InfoSection.elements";

const InfoSection5 = () => {
  return (
    <UpdateContainer>
      <Update_1>
        <Update_h3>
          Stay up to date on what’s new in our courses and games
        </Update_h3>
      </Update_1>

      <div>
        <form action="">
          <Form>
            <FormInput type="text" placeholder="input your Email Address" />
            <Button1> {"Subcribe"}</Button1>
          </Form>
        </form>
      </div>
    </UpdateContainer>
  );
};

export default InfoSection5;
