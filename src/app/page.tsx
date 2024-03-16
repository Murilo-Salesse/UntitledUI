import { SettingsTabs } from "@/Components/SettingsTabs";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";

import * as Input from '../Components/input';
import * as FileInput from '../Components/Form/FileInput'
import { Select } from "../Components/Form/Select";
import { SelectItem } from "@/Components/Form/Select/SelectItem";
import { Textarea } from "@/Components/Form/Textarea";
import { Button } from "@/Components/Button";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">Settings</h1>

      <SettingsTabs/>

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 pb-5 border-b border-zinc-200 dark:border-zinc-700">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Personal info</h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Update your photo and personal details here.</span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">Cancel</Button>
            <Button variant="primary" type="submit" form="settings">Save</Button>
          </div>
        </div>
        
        <form id="settings" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700">
          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col">
            <label htmlFor="firstName" className="text-small font-medium text-zinc-700 dark:text-zinc-300">Name</label>

            <div className="lg:grid gap-6 lg:grid-cols-2 flex flex-col">
              <Input.InputRoot>
                <Input.InputControl id="firstName" defaultValue="Murilo"/>
              </Input.InputRoot>

              <div className="flex flex-col gap-3 lg:block">
                <label htmlFor="lastName" className="text-small font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only">Last name</label>
                <Input.InputRoot>
                  <Input.InputControl id="lastName" defaultValue="Salesse"/>
                </Input.InputRoot>
              </div>
            </div>
          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label htmlFor="email" className="text-small font-medium text-zinc-700 dark:text-zinc-300">Email address</label>
            <Input.InputRoot>
              <Input.InputPrefix>
              <Mail className="h-5 w-5 text-zinc-500"/>
              </Input.InputPrefix>

              <Input.InputControl id="email" type="email" defaultValue="murilo@email.com.br"/>
            </Input.InputRoot>
          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label htmlFor="photo" className="text-small font-medium text-zinc-700 dark:text-zinc-300">Your Photo <span className="block text-sm font-normal mt-0.5 text-zinc-500">This will be displayed on your profile.</span></label>
              <FileInput.Root className="flex flex-col lg:flex-row lg:items-start gap-5">
                <FileInput.ImagePreview/>
                <FileInput.Trigger/>
                <FileInput.Control/>
              </FileInput.Root>
          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label htmlFor="role" className="text-small font-medium text-zinc-700 dark:text-zinc-300">Role</label>
            <Input.InputRoot>
                <Input.InputControl id="role" defaultValue="DEV"/>
            </Input.InputRoot>
          </div>
          
          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label htmlFor="country" className="text-small font-medium text-zinc-700 dark:text-zinc-300">Country</label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil"/>
              <SelectItem value="us" text="United States"/>
            </Select>
          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label htmlFor="timezone" className="text-small font-medium text-zinc-700 dark:text-zinc-300">Timezone</label>
            <Select placeholder="Select a timezone...">
              <SelectItem value="utc8" text="Pacific Standard Time (UTC-08:00)"/>
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)"/>
            </Select>
          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label htmlFor="bio" className="text-small font-medium text-zinc-700 dark:text-zinc-300">Bio<span className="block text-sm font-normal mt-0.5 text-zinc-500">Write a short introduction.</span></label>
            <div className="space-y-3">
              <div className="lg:grid gap-3 lg:grid-cols-2 flex flex-col">
                <Select placeholder=""  defaultValue='normal'>
                  <SelectItem value="normal" defaultChecked text="Normal Text"/>
                  <SelectItem value="md" text="Markdown"/>
                </Select>

                <div className="flex items-center gap-1">
                  <Button variant="ghost" type="button" className="p-2 hover:bg-zinc-50 rounded-md">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
                  </Button>
                  <Button variant="ghost" type="button" className="p-2 hover:bg-zinc-50 rounded-md">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
                  </Button>
                  <Button variant="ghost" type="button" className="p-2 hover:bg-zinc-50 rounded-md">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
                  </Button>
                  <Button variant="ghost" type="button" className="p-2 hover:bg-zinc-50 rounded-md">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
                  </Button>
                  <Button variant="ghost" type="button" className="p-2 hover:bg-zinc-50 rounded-md">
                    <ListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
                  </Button>
                </div>
              </div>

              <Textarea id="bio" defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, amd Webflow development."/>
            </div>
          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col pt-5">
            <label htmlFor="projects" className="text-small font-medium text-zinc-700 dark:text-zinc-300">Portfolio Projects<span className="block text-sm font-normal mt-0.5 text-zinc-500">Share a few snippets of your work.</span></label>
            <FileInput.Root>
                <FileInput.Trigger/>
                <FileInput.FileList/>
                <FileInput.Control multiple/>
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <div className="flex items-center gap-2">
            <Button variant="outline" type="button">Cancel</Button>
            <Button variant="primary" type="submit" form="settings">Save</Button>
          </div>
          </div>
        </form>
      </div>
    </>
  );
}
