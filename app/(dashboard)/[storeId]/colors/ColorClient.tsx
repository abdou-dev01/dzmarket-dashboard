"use client";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ColorColumns, columns } from "./Columns";
import { DataTable } from "@/components/ui/dataTable";
import ApiList from "@/components/ApiList";

interface ColorClientProps {
  data: ColorColumns[];
}

const ColorClient: React.FC<ColorClientProps> = ({ data = [] }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Colors ${data.length}`}
          description="Manage color for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <Plus className="h-4 w-4" />
          Add new
        </Button>
      </div>
      <hr />
      <DataTable columns={columns} data={data} serachKey="name" />
      <Heading title="Api" description="Api calls for Colors" />
      <hr />
      <ApiList entityName="color" entityIdName="colorId" />
    </>
  );
};

export default ColorClient;
