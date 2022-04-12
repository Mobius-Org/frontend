import React from "react";
import { Button1 } from "../../global-styles";
import {
  UpdateContainer,
  Update1,
  Updateh3,
  Form,
  FormInput,
  ButtonCon,
} from "./InfoSection.elements";

const InfoSection5 = () => {
  return (
    <UpdateContainer>
      <Update1>
        <Updateh3>
          Stay up to date on whats new in our courses and games
        </Updateh3>
      </Update1>

      <div>
        <form action="">
          <Form>
            <FormInput type="text" placeholder="input your Email Address" />
            <ButtonCon>
              <Button1> {"Subcribe"}</Button1>
            </ButtonCon>
          </Form>
        </form>
      </div>
    </UpdateContainer>
  );
};

export default InfoSection5;
