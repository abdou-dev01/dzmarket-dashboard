"use client";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { BillboardColumns, columns } from "./Columns";
import { DataTable } from "@/components/ui/dataTable";
import ApiList from "@/components/ApiList";

interface BillboardClientProps {
  data: BillboardColumns[];
}

const BillboardClient: React.FC<BillboardClientProps> = ({ data = [] }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards ${data.length}`}
          description="Manage billboard for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="h-4 w-4" />
          Add new
        </Button>
      </div>
      <hr />
      <DataTable columns={columns} data={data} serachKey="label" />
      <Heading title="Api" description="Api calls for Billboards" />
      <hr />
      <ApiList entityName="billboard" entityIdName="billboardId" />
    </>
  );
};

export default BillboardClient;
