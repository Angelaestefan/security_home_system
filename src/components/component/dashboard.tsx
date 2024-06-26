"use client";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/zr19vzJTyHi
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { JSX, ClassAttributes, HTMLAttributes, SVGProps } from "react";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { Hume } from "./hume";
import { Fotoresistencia } from "./fotoresistencia";
import { Temp } from "./temp";
import { Distance } from "./distance";
import { HoraDistance } from "./hora_distance";
import { FechaDistance } from "./fecha_distance";

export function Dashboard() {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen">
        <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
          <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
              href="#"
            >
              <Package2Icon className="w-6 h-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link className="font-bold" href="#">
              Home
            </Link>
            <Link className="text-gray-500 dark:text-gray-400" href="#">
              About
            </Link>
            <Link className="text-gray-500 dark:text-gray-400" href="#">
              Services
            </Link>
            <Link className="text-gray-500 dark:text-gray-400" href="#">
              Contact
            </Link>
          </nav>
          <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="flex-1 ml-auto sm:flex-initial" />
            <Button className="rounded-full" size="icon" variant="ghost">
              <img
                alt="Avatar"
                className="rounded-full"
                height="32"
                onClick={undefined}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </div>
        </header>
        <main className="flex min-h-[calc(100vh-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
          <Card className="flex flex-col w-full max-w-4xl">
            <CardHeader className="grid gap-1.5">
              <CardTitle>Security Home System</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="grid gap-0.5">
                <h3 className="font-semibold">Datos Actuales</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Datos en tiempo Real de los sensores.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <h4>Temperatura</h4>
                  <div className="text-4xl font-semibold">
                    <Temp />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4>Intensidad de la Luz</h4>
                  <div className="text-4xl font-semibold">
                    <Fotoresistencia />
                  </div>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <h4>Humedad</h4>
                  <div className="text-4xl font-semibold">
                    <Hume />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4>Distancia</h4>
                  <div className="text-4xl font-semibold">
                    <Distance />
                  </div>
                </div>
              </div>
              <div className="grid gap-0.5">
                <h3 className="font-semibold">Analíticos</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Datos Históricos de los sensores.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardDescription>Temperatura Actual:</CardDescription>
                    <CardTitle>
                      <Temp />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CurvedlineChart className="aspect-[4/3]" />
                  </CardContent>
                </Card>
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardDescription>
                      Intesidad de la Luz Actual:
                    </CardDescription>
                    <CardTitle>
                      <Fotoresistencia />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CurvedlineChart className="aspect-[4/3]" />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-0.5">
                <h3 className="font-semibold">Registros</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Eventos pasados de los sensores.
                </p>
              </div>
              <Tabs className="w-full max-w-4xl" defaultValue="temperature">
                <TabsList className="grid grid-cols-4 gap-4">
                  <TabsTrigger value="movement">Movimiento</TabsTrigger>
                  <TabsTrigger value="temperature">Temperatura</TabsTrigger>
                  <TabsTrigger value="light">Intensidad de Luz</TabsTrigger>
                  <TabsTrigger value="todos">Todos</TabsTrigger>
                </TabsList>
                <TabsContent value="movement">
                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardDescription>Sensor de Movimiento</CardDescription>
                      <CardTitle>Movimiento de Detectado</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-4 gap-2">
                        <div>Fecha</div>
                        <div>Valor</div>
                        <div>Hora</div>
                        <div>Locación</div>
                        <div>
                          <FechaDistance />
                        </div>
                        <div>
                          <Distance />
                        </div>
                        <div>
                          <HoraDistance />
                        </div>
                        <div>Cocina</div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="temperature">
                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardDescription>Temperatura Actual:</CardDescription>
                      <CardTitle>
                        <Temp />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-2">
                        <div>Fecha</div>
                        <div>Valor</div>
                        <div>Tiempo</div>
                        <div>
                          <FechaDistance />
                        </div>
                        <div>
                          <Temp />
                        </div>
                        <div>
                          <HoraDistance />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="light">
                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardDescription>
                        Intensidad de la luz Actual
                      </CardDescription>
                      <CardTitle>
                        <Fotoresistencia />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-2">
                        <div>Fecha</div>
                        <div>Valor</div>
                        <div>Tiempo</div>
                        <div>
                          <FechaDistance />
                        </div>
                        <div>
                          <Fotoresistencia />
                        </div>
                        <div>
                          <HoraDistance />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="todos">
                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardDescription>Movement Sensor</CardDescription>
                      <CardTitle>Detected Movement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-4 gap-2">
                        <div>Date</div>
                        <div>Value</div>
                        <div>Time</div>
                        <div>Location</div>
                        <div>
                          <FechaDistance />
                        </div>
                        <div>Detected</div>
                        <div>
                          <HoraDistance />
                        </div>
                        <div>Kitchen</div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
}

function Package2Icon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...rest}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function CurvedlineChart({ className }: IconProps) {
  return (
    <div className={className}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
