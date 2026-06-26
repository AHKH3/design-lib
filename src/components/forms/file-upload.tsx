"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Upload, X, File, Image } from "lucide-react";
import { formatBytes } from "../../lib/utils";

export interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in bytes
  onFilesChange?: (files: File[]) => void;
  className?: string;
}

/**
 * FileUpload — Drag-and-drop file upload with preview.
 * Use case: Forms, admin panels, file management
 */
export function FileUpload({
  accept = "image/*,.pdf,.doc,.docx",
  multiple = false,
  maxSize = 5 * 1024 * 1024, // 5MB
  onFilesChange,
  className,
}: FileUploadProps) {
  const [files, setFiles] = React.useState<File[]>([]);
  const [dragOver, setDragOver] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const validFiles = Array.from(newFiles).filter((f) => f.size <= maxSize);
    const updated = multiple ? [...files, ...validFiles] : validFiles.slice(0, 1);
    setFiles(updated);
    onFilesChange?.(updated);
  };

  const removeFile = (idx: number) => {
    const updated = files.filter((_, i) => i !== idx);
    setFiles(updated);
    onFilesChange?.(updated);
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
        onClick={() => inputRef.current?.click()}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 transition-colors",
          dragOver ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-muted-foreground/50"
        )}
      >
        <Upload className="h-8 w-8 text-muted-foreground" />
        <p className="mt-2 text-sm font-medium">
          Drop files here or click to upload
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Max {formatBytes(maxSize)} per file
        </p>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, idx) => (
            <div key={idx} className="flex items-center gap-3 rounded-lg border p-3">
              {file.type.startsWith("image/") ? (
                <Image className="h-8 w-8 text-muted-foreground" />
              ) : (
                <File className="h-8 w-8 text-muted-foreground" />
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{file.name}</p>
                <p className="text-xs text-muted-foreground">{formatBytes(file.size)}</p>
              </div>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={(e) => { e.stopPropagation(); removeFile(idx); }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
