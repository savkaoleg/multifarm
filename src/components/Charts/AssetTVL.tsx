import React from "react";

import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

import { useTheme } from "@mui/material/styles";
import ChartTitle from "./ChartTitle";
import HistoryItem, { HistoryItemType } from "../../types/HistoryItem";
import { formatDate, formatNumber, commarize } from "./helper";

const extraSpace = 0.01; // 1%

export default function AssetTVL({
  tvlStakedHistory,
}: {
  tvlStakedHistory: HistoryItemType[];
}) {
  const theme = useTheme();

  return (
    <>
      <ChartTitle title='Asset TVL' />
      <ResponsiveContainer>
        <AreaChart
          data={tvlStakedHistory}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey={HistoryItem["Date"]}
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
            tickFormatter={(tick: string) => {
              return `${formatDate(tick)}`;
            }}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
            domain={[
              (dataMin) => formatNumber(dataMin * (1 - extraSpace)),
              (dataMax) => formatNumber(dataMax * (1 + extraSpace)),
            ]}
            tickFormatter={(tick) => {
              return `${commarize(tick)}`;
            }}
          ></YAxis>
          <Area
            isAnimationActive={false}
            type='monotone'
            dataKey={HistoryItem["Value"]}
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
