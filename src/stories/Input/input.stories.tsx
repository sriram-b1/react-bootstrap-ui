
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import Input from './input'

storiesOf("Input", module)
    .add("Sample Input", () => (
        <div>
            <Input name="SampleInput" placeholder="sriram_b1@dell.com" label="Email" onChange={action("Changed")}></Input>
        </div>
    ))
    .add("Helper Text", () => (
        <div>
            <Input name="SampleInput" placeholder="sriram_b1@dell.com" label="Email" helperText="Typer in your email" onChange={action("Changed")}></Input>
        </div>
    ))
    .add("Error", () => (
        <div>
            <Input name="SampleInput" placeholder="sriram_b1@dell.com" label="Email" error errorHelperText="Invalid Email" helperText="Typer in your email" onChange={action("Changed")}></Input>
        </div>
    ))