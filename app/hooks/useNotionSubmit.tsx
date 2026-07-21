import { useState } from "react";

// Define the form data structure to follow
export interface FormState {
  nombre: string | null;
  empresa: string | null;
  correo: string | null;
  posicion: string | null;
  liderazgo: string | null;
  motivo: string | null;
}

export const useNotionSubmit = () => {
  // -------------------- Different Submit process status ------------------------------
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const apiURL =
    "https://back-webs-2-0-production.up.railway.app/dnm/submit-form";
  // const apiURL = "http://localhost:3003/dnm/submit-form";

  // -------------------- Function that posts the form data to the API ------------------------------
  const submitToNotion = async (formData: FormState) => {
    setLoading(true);
    setError(null);

    try {
      // Map your frontend keys (Spanish) to what your running API expects (English)
      const payload = {
        nombre: formData.nombre,
        correo: formData.correo,
        empresa: formData.empresa,
        posicion: formData.posicion || " ", // Auto-fill OPTIONAL fields with an empty string
        liderazgo: formData.liderazgo || " ",
        motivo: formData.motivo || " ",
      };

      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("response.json: ", data);

      if (!response.ok) {
        setError(data.error || "Failed to submit data.");
        throw new Error(data.error || "Something went wrong saving to Notion.");
      }

      setIsSubmitted(true);
      return true;
    } catch (err: any) {
      setError(err.message || "Failed to submit data.");
      console.error("Submission Error:", err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // -------------------- Function that posts the form data to the API ------------------------------
  const resetSubmit = async () => {
    setIsSubmitted(false);
  };

  return { submitToNotion, loading, error, isSubmitted, resetSubmit };
};
