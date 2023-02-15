import { Form, useLoaderData, redirect, useNavigate, } from "react-router-dom";
import { updateContact } from "../Contact";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const contactId = params.contactId;
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${contactId}`);
}

export default function EditContact() {
  const contact = useLoaderData();
  const navigate = useNavigate();  

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Description</span>
        <input
          placeholder="Description"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
      </p>
      <p>
        <span>Cod</span>
        <input
          placeholder="Cod"
          aria-label="codigo"
          type="text"
          name="cod"
          defaultValue={contact.cod}
        />
      </p>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button 
          type="button" 
          onClick={() => {navigate(-1);}}
          >
            Cancel
        </button>
      </p>
    </Form>
  );
}