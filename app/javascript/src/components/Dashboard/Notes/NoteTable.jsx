import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Typography, Tag, Avatar, Tooltip } from "@bigbinary/neetoui/v2";

export default function NoteTable({ notes = [] }) {
  return (
    <div className="w-full mt-10">
      {notes.map(note => {
        return (
          <div
            key={note.id}
            className="neeto-ui-border-black
neeto-ui-shadow-s w-full h-40 p-5"
          >
            <Typography style="h3" className="mb-3">
              {note.title}
            </Typography>

            <p>{note.description}</p>
            <hr className="mt-8" />
            <div className="flex justify-between mt-3">
              <Tag size="small" label="Getting Started" color="grey" />
              <div className="flex flex-row items-center">
                <Clock color="#1e1e20" size={12} className="mr-2" />
                <Tooltip
                  placement={"bottom-start"}
                  content={"Wednesday, 10:30AM"}
                >
                  <p className="text-xs mr-2">Created 2 hours ago</p>
                </Tooltip>

                <Avatar
                  // onClick={{
                  //   onClick: function noRefCheck() {},
                  // }}
                  size="small"
                  user={{
                    name: "neeto UI"
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
