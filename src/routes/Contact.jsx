import { Form, useLoaderData, } from "react-router-dom";
import { getContact, updateContact } from "../Contact";
import HooksPage from "./hooks/HooksPage";

export async function loader({ params }) {
  const contact = await getContact(params.contactId);
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return contact;
} 

export async function action({ request, params }) {
  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}

export default function Contact() {
  const contact = useLoaderData();

  return (
    <>
      <div id="contact">
        <div>
          <h1>
            {contact.first ? (
              <>
                {contact.first}
              </>
            ) : (
              <i>No Name</i>
            )}{" "}
          </h1>
          <div>
            <p><strong>Description:</strong> { contact.notes }</p>
          </div>

          <div className="buttons">
            <Form action="edit">
              <button type="submit">Edit</button>
            </Form>
            <Form
              method="post"
              action="destroy"
            >
              <button type="submit">Delete</button>
            </Form>
          </div>
        </div>
      </div>
      <div className="hooks">
        <HooksPage/>
      </div>
    </>
  );
}