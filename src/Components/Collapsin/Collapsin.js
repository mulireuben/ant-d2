import { Collapse, Typography,Form,Input } from "antd"

const Collapsin = () => {
    // const {getFieldDecorator}=this.props.Form
  return (
    <div className="new">
        <Collapse accordion={true}>
        <Collapse.Panel  key={"1"} header="contact">
            <Form className="form-page">
                <Form.Item name="contact" label="mobile number">

                </Form.Item>
            
            </Form>
        </Collapse.Panel>
        <Collapse.Panel  key={"2"} header="residence">
            <Typography.Text>this is my contact panel</Typography.Text>
        </Collapse.Panel>
        <Collapse.Panel  key={"3"} header="occupation">
            <Typography.Text>this is my contact panel</Typography.Text>
        </Collapse.Panel>
        </Collapse>
      
    </div>
  )
}

export default Collapsin;
