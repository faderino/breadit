"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Button } from "./ui/button";

const CloseModal: FC = () => {
  const router = useRouter();

  return (
    <Button
      variant="subtle"
      className="h-6 w-6 p-0 rounded"
      aria-label="close modal"
      onClick={router.back}
    >
      <X className="h-4 w-4" />
    </Button>
  );
};

export default CloseModal;
