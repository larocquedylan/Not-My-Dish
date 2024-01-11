import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

export default function TaskCreation() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg overflow-auto max-w-3xl mx-auto">
      <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-center w-full">Task Details</h2>
        <Button className="bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 text-black dark:text-white rounded p-1">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          </svg>
        </Button>
      </div>
      <div className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage alt="@jaredpalmer" src="/placeholder-user.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">Task created by @jaredpalmer</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Created on January 11, 2024</p>
              <div className="flex flex-col gap-4 mt-2">
                <div className="font-semibold">Time Limit: 3 days</div>
                <div className="font-semibold flex items-center gap-2">
                  Points:
                  <div className="flex items-center gap-2">
                    <input
                      className="form-checkbox h-5 w-5 text-green-500"
                      id="point1"
                      name="points"
                      type="checkbox"
                      value="1"
                    />
                    <label className="font-normal" htmlFor="point1">
                      1
                    </label>
                    <input
                      className="form-checkbox h-5 w-5 text-green-500"
                      id="point2"
                      name="points"
                      type="checkbox"
                      value="2"
                    />
                    <label className="font-normal" htmlFor="point2">
                      2
                    </label>
                    <input
                      className="form-checkbox h-5 w-5 text-green-500"
                      id="point3"
                      name="points"
                      type="checkbox"
                      value="3"
                    />
                    <label className="font-normal" htmlFor="point3">
                      3
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="task-details">Task Details</Label>
            <Textarea className="min-h-[100px]" id="task-details" placeholder="Enter task details here" />
            <Label className="mt-4" htmlFor="task-image">
              Task Image
            </Label>
            <Input accept="image/*" className="mt-2" id="task-image" type="file" />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-6">
          <Avatar>
            <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold">Task claimed by @shadcn</h2>
          </div>
        </div>
      </div>
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <Button className="bg-green-500 hover:bg-green-600 text-white rounded">Publish to the Stack</Button>
      </div>
    </div>
  )
}