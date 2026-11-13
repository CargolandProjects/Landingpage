export const stats = {
  async markVisitor() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/visitor`,
        {
          credentials: "include", // Include cookies in the request
        },
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to mark visitor");
      }
    } catch (err) {
      console.error(
        err instanceof Error ? err.message : "Error marking visitor:",
      );
    }
  },
};
