export async function toolResult(value: unknown) {
  const resolved = await value;

  return {
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(resolved),
      },
    ],
  };
}
