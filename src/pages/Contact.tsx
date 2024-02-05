import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toastFail, toastSuccess } from "../components/molecules/toast";

const defaultValues = {
    name: "",
    email: "",
    message: "",
};
const Contact = () => {
    //had ts issue with import.meta.env so added "types" in tsconfig.json
    // const formRef=useRef(null)
    const [form, setForm] = useState(defaultValues);

    const [loading, setLoading] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.email,
                    to_name: "AsheshDon",
                    to_email: form.email,
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setForm(defaultValues);
                toastSuccess("Email sent Successfully !");
            })
            .catch(() => {
                toastFail("Email not send");
            });
        setLoading(false);
    };
    const onChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const onFocus = () => {};
    const onBlur = () => {};

    return (
        <section className="max-container flex lg:flex-row flex-col">
            <div className="flex-1 flex flex-col">
                <h1 className="head-text">Connect Here</h1>
                <form className="w-full flex flex-col mt-14 gap-7" onSubmit={onSubmit}>
                    <label className="text-black-500 font-semibold">Name</label>
                    <input
                        name={"name"}
                        type="text"
                        placeholder="Ashesh Gurung"
                        required
                        value={form.name}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        style={{ border: "1px solid gray", borderRadius: "4px", padding: "8px" }}
                    />
                    <label className="text-black-500 font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="abc@gmail.com"
                        required
                        value={form.email}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        style={{ border: "1px solid gray", borderRadius: "4px", padding: "8px" }}
                    />
                    <label className="text-black-500 font-semibold">Message</label>
                    <textarea
                        rows={5}
                        cols={10}
                        name="message"
                        onChange={onChange}
                        placeholder="Hey, I wanna hire you for ..."
                        style={{ border: "1px solid gray", borderRadius: "4px", padding: "8px" }}
                    />
                    <button className="btn" type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Submit"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
