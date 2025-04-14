import { Button } from "@/components/ui/button";
import { QuitModalProps } from "@/lib/interfaces";
import React from "react";


const QuitModal: React.FC<QuitModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          Are you sure you want to quit?
        </h2>
        <p className="text-sm text-gray-600 mb-6">All progress will be lost.</p>
        <div className="flex justify-end gap-3">
          <Button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 cursor-pointer"
          >
            Quit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuitModal;
