import { Label } from "@radix-ui/react-label";
import { Separator } from "@radix-ui/react-separator";
import { FileVideo, Upload } from "lucide-react";
import React, { ChangeEvent, useState, useMemo } from "react";
import { Textarea } from "./textarea";
import { Button } from "./button";

export function VideoInputForm() {

    const [videoFile, setVideoFile] = useState<File | null>(null)

    function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
        const { files } = event.currentTarget

        if (!files) {
            return
        }

        const selectedFile = files[0]
        setVideoFile(selectedFile)
    }

    const previewURL = useMemo(() => {
        if (!videoFile) {
            return null
        }

        return URL.createObjectURL(videoFile)
    }, [videoFile])

    return (
        <form action="" className="space-y-6">


            <label htmlFor="video"
                className="relative border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5">
                {previewURL ? (
                    <video src={previewURL} controls={false} className="pointer-events-none absolute inset-0" />
                ) : (
                    <>
                        <FileVideo className="w-4 h-4" />
                        Selecione um vídeo
                    </>
                )}
            </label>
            <input type="file" id="video" accept="video/mp4" className="sr-only" onChange={handleFileSelected} />

            <Separator />

            <div className="space-y-2">
                <Label htmlFor="">
                    Prompt de transcrição
                </Label>
                <Textarea id="transcription_prompt"
                    className="h-20 leading-relaxed resize-none"
                    placeholder="Inclua palavras chave mencionadas no vídeo separadas por vírgula (,)">
                </Textarea>
            </div>

            <Button type="submit" className="w-full">
                Carregar vídeo
                <Upload className="w-4 h-4 ml-2"></Upload>
            </Button>
        </form>
    )
}